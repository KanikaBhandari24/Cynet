
function PrevGallery(){
    const images = ["./src/assets/img1.jpeg",
                    "./src/assets/img1.jpeg",
                    "./src/assets/img1.jpeg",
                    "./src/assets/img1.jpeg",
                    "./src/assets/img1.jpeg",
                    "./src/assets/img1.jpeg",
                    "./src/assets/img1.jpeg",
                    "./src/assets/img1.jpeg"
    ]

    return(
        <div className="bg-[#DAFCE0]">
            <h1 className="text-[88px]/[89px] tracking-tighter text-[rgb(29,57,43)] mont-bold ml-[156px] py-[75px] w-[50vw] font-bold">Glimpse of Previous Cynet</h1>
            <div className="flex justify-center flex-wrap px-16 py-14 gap-6">
                    {images.map((image, index)=> <img className="rounded-2xl h-60 object-center" src={image} alt="Previous Cynet Image"key={index}/>)}
            </div>
        </div>
    )

}

export default PrevGallery