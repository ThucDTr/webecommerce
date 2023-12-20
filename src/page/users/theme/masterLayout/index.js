import Footer from "../footer";
import Header from "../header";

function MasterLayout({children, ...props}) {
    return (   
        <div {...props}>
            <Header />
            {children}
            <Footer />          
        </div>
     );
}

export default MasterLayout;