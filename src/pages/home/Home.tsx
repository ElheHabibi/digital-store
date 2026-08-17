import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function Home() {
  return (
    <div className="bg-[#151513] h-full">
      <Container>
        <div className="text-center py-16 sm:py-24">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#EDEDE8] mb-3">
            Everything you need, in one place
          </h1>
          <p className="text-sm text-[#8A8A82] max-w-sm mx-auto mb-8">
            A simple store to find exactly what you're looking for
          </p>
          <Link to="/store">
            <Button variant="primary">Go to store</Button>
          </Link>
        </div>

        <div className="border-t border-dashed border-[#2C2C28] py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl">
            🚚
            </p>
            <p className="text-xs text-[#EDEDE8]">Fast shipping</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl">
            🔐
            </p>
            <p className="text-xs text-[#EDEDE8]">Secure checkout</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl">
            🔄️
            </p>
            <p className="text-xs text-[#EDEDE8]">Easy returns</p>
          </div>
        </div>

        <div className="border-t border-dashed border-[#2C2C28] py-10">
          <div className="max-w-xs mx-auto text-sm">
            <div className="flex justify-between text-[#8A8A82] py-1">
              <span>ITEMS SOLD</span>
              <span className="text-[#EDEDE8]">+10,000</span>
            </div>
            <div className="flex justify-between text-[#8A8A82] py-1">
              <span>AVG. RATING</span>
              <span className="text-[#EDEDE8]">4.9 / 5</span>
            </div>
          </div>
        </div>

        <div className="text-center pb-14">
          <p className="text-xs tracking-[0.2em] text-[#8A8A82]">
            *** THANK YOU FOR SHOPPING ***
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Home;