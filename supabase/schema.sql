-- Initial schema blueprint. Review policies and transactional booking logic before production.
create extension if not exists pgcrypto;
create table if not exists public.profiles (id uuid primary key references auth.users(id) on delete cascade, display_name text, created_at timestamptz not null default now());
create table if not exists public.services (id uuid primary key default gen_random_uuid(), title text not null, kind text not null check(kind in ('individual','group','workshop')), description text, duration_minutes integer not null check(duration_minutes>0), price_chf_cents integer not null check(price_chf_cents>=0), active boolean not null default false);
create table if not exists public.events (id uuid primary key default gen_random_uuid(), service_id uuid not null references public.services(id), starts_at timestamptz not null, ends_at timestamptz not null, capacity integer not null check(capacity>0), status text not null default 'draft' check(status in ('draft','published','cancelled')), check(ends_at>starts_at));
create table if not exists public.bookings (id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id), event_id uuid references public.events(id), service_id uuid not null references public.services(id), starts_at timestamptz not null, ends_at timestamptz not null, status text not null default 'pending' check(status in ('pending','confirmed','cancelled','expired')), created_at timestamptz not null default now(), check(ends_at>starts_at));
create table if not exists public.payments (id uuid primary key default gen_random_uuid(), booking_id uuid not null references public.bookings(id), provider_reference text unique, amount_chf_cents integer not null check(amount_chf_cents>=0), status text not null default 'pending');
create table if not exists public.community_groups (id uuid primary key default gen_random_uuid(), title text not null, description text);
create table if not exists public.group_members (group_id uuid references public.community_groups(id) on delete cascade, user_id uuid references auth.users(id) on delete cascade, primary key(group_id,user_id));
create table if not exists public.posts (id uuid primary key default gen_random_uuid(), group_id uuid not null references public.community_groups(id), author_id uuid not null references auth.users(id), body text not null, created_at timestamptz not null default now());
create table if not exists public.comments (id uuid primary key default gen_random_uuid(), post_id uuid not null references public.posts(id) on delete cascade, author_id uuid not null references auth.users(id), body text not null, created_at timestamptz not null default now());
-- Default deny for browser clients until explicit, tested RLS policies are added.
alter table public.profiles enable row level security;
alter table public.services enable row level security;
alter table public.events enable row level security;
alter table public.bookings enable row level security;
alter table public.payments enable row level security;
alter table public.community_groups enable row level security;
alter table public.group_members enable row level security;
alter table public.posts enable row level security;
alter table public.comments enable row level security;
