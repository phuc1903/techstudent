import Button from "@/Components/Button/Index";

function Banner() {
    return (
        <section className="bg-gray-100 py-12 relative min-h-[300px] h-[450px] mt-[42px]">
            <div className="max-w-[1320px] h-full mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
                {/* Left Section: Text */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-10">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                        Learn with expert anytime anywhere
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Our mission is to help people to find the best course
                        online and learn with expert anytime, anywhere.
                    </p>
                    <Button position="to" link={route('register')}>Create Account</Button>
                </div>

                {/* Right Section: Image */}
                {/* <div className="lg:w-1/2 mt-8 lg:mt-0"> */}
                <div className="absolute lg:w-1/2 top-0 right-0 bottom-0">
                    <img
                        src="images/banner.png" // Replace with your image path
                        alt="Expert teaching"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Banner;
