
function PrevGallery(){
    const images = ["./src/assets/img1.jpeg",
                    "./src/assets/img1.jpeg",
                    "./src/assets/img2.jpeg",
                    "./src/assets/img3.jpeg",
                    "./src/assets/img1.jpeg",
                    "./src/assets/img4.jpeg",
                    "./src/assets/img5.jpeg",
                    "./src/assets/img6.jpeg"
    ]

    return(
        <div className="bg-[#DAFCE0]">
            <h1 className="text-[88px]/[89px] tracking-tighter text-[rgb(29,57,43)] mont-bold ml-[156px] py-[75px] w-[50vw] font-bold">Glimpse of Previous Cynet</h1>
            <div className=" py-14">
                    <div className="flex list-none flex-wrap gap-x-6 gap-y-4 mx-[156px] h-64 overflow-y-scroll">
                        {images.map((image, index)=><li className="h-[25vh] grow-[1]" key={index}><img className="rounded-2xl max-h-full min-w-full block object-cover object-center" src={image} alt={`Previous Cynet Image ${index}`} key={index} /></li>)}
                    </div>
            </div>
        </div>
    )

}

export default PrevGallery