
function PrevGallery(){
    const images = ["./src/assets/preCynetImages/img1.jpeg",
                    "./src/assets/preCynetImages/img1.jpeg",
                    "./src/assets/preCynetImages/img2.jpeg",
                    "./src/assets/preCynetImages/img3.jpeg",
                    "./src/assets/preCynetImages/img1.jpeg",
                    "./src/assets/preCynetImages/img4.jpeg",
                    "./src/assets/preCynetImages/img5.jpeg",
                    "./src/assets/preCynetImages/img6.jpeg"
    ]

    return(
        <div className="bg-[#DAFCE0]">
            <h1 className="text-[88px]/[89px] tracking-tighter text-[rgb(29,57,43)] mont-bold ml-[156px] py-[75px] w-[50vw] font-bold">Glimpse of Previous Cynet</h1>
            <div className=" py-12">
                    <div className="flex list-none flex-wrap gap-x-6 gap-y-4 mx-[156px]">
                        {images.map((image, index)=><li className="h-[25vh] grow-[1]" key={index}><img className="rounded-2xl max-h-full min-w-full block object-cover object-center" src={image} alt={`Previous Cynet Image ${index}`} key={index} /></li>)}
                    </div>
            </div>
        </div>
    )

}

export default PrevGallery