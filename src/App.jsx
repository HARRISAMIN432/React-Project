import "./App.css";
import Row from "./components/common/Row";
import TopHeader from "./components/Header/TopHeader";
import BottomHeader from "./components/Header/BottomHeader";

function App() {
  return (
    <div className="w-full bg-[rgba(79,95,112,0.05)] h-[60px]">
      <TopHeader />
      <BottomHeader />
      <div className="w-full px-[8%]">
        <Row className="items-center justify-between">
          <div className="w-[46%]">
            <h1 className="text-[74px] text-slate-950 font-light">
              Collections
            </h1>
            <p className="text-[30px] text-black mt-[10px]">
              You can explore and shop many different collections from different
              products here
            </p>
            <button className="h-[50px] w-[20%] text-white bg-black text-[20px] mt-[50px] font-medium">
              Shop now
            </button>
          </div>
          <div className="w-[42%]">
            <div className="w-[400px] h-[450px] relative">
              <img
                className="h-full w-full rounded-tl-[160px] rounded-br-[160px]"
                src="https://images.unsplash.com/photo-1739582767008-faa274e18ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="absolute h-full w-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#000040] top-[20px] left-[18px] -z-[1px]"></div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default App;
