import Link from 'next/link';
import Newsletter from './newsletter';
const offers=[['Naturatelier','Zurück zu dir durch Natur, Sinne & Erleben.','atelier','naturatelier'],['Wegbegleitung','Zurück zu dir auf deinem Weg.','weg','wegbegleitung'],['Seelenschwestern-Kreis','Zurück zu dir in Verbundenheit.','kreis','seelenschwestern-kreis']];
export default function Home(){return <><section className="offers">{offers.map(([title,desc,img,slug])=><article key={slug}><Link href={'/'+slug}><img className="round" src={'/images/'+img+'.jpg'} alt={title}/></Link><h2>{title}</h2><p>{desc}</p>{slug==='seelenschwestern-kreis'&&<small className="coming">Coming soon</small>}<Link className="btn" href={'/'+slug}>Mehr erfahren →</Link></article>)}</section><Newsletter/></>}
