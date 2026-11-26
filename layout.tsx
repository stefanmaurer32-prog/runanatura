import './style.css';
import Header from './header';
export const metadata={title:'RUNA NATURA – Zurück zu dir.',description:'Naturatelier, Wegbegleitung und Seelenschwestern-Kreis in Lostorf.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="de-CH"><body><Header/><main>{children}</main><footer>RUNA NATURA · Zurück zu dir. <a href="/kontakt">Kontakt</a><small>Entwicklungsversion – rechtliche Angaben vor Veröffentlichung ergänzen.</small></footer></body></html>}
