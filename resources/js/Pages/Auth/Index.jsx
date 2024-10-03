import Image from "@/Components/Images/Index";

function Index({ children, image = false, title, urlImage }) {
    return (
        <>
            <div className="width-container mx-auto">
                <div className="grid grid-cols-2 gap-6 ease-in duration-300">
                    <div className={`w-full min-h-[600px] ${image ? "order-1" : "order-2"}`}>
                        <Image
                            src={urlImage}
                            classes="h-full w-full block object-cover"
                        />
                    </div>
                    <div className={`w-full ${image ? "order-2" : "order-1"}`}>
                        <h3 className="heading-02 text-gray-900 text-center mb-10">
                            {title}
                        </h3>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
