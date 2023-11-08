import SubReddit from "./SubReddit";
import Article from "./Article";

const Main = () => {
    return ( 
        <main className="main">
            <div className="mainContent">
                <Article />
            </div>
            <SubReddit />
        </main>

     );
}
 
export default Main;