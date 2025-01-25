import Navbar from "../components/Navbar";


const App = () => {
    return (
        <>
            <div className="w-full min-h-screen flex items-center flex-col relative">
                <Navbar></Navbar>
                {/* <div className="mt-auto">
                    <h1>footer</h1>
                </div> */}
            </div>
        </>
    );
};

export default App;