import DarkMod from "./DarkMod"
import FooterCustom from "./FooterCustom"
import HeaderCustome from "./HeaderCustome"

function LayoutPage({ children }) {
  return (
    <>
        <HeaderCustome />

        <div className="page-layoute">
            {children}
        </div>

        <FooterCustom />
    </>
  )
}

export default LayoutPage