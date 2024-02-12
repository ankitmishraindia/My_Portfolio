
function Project({imageName,projectName,ProjectDesc,techUsed,liveLink,githubLink}){

    return(
    <div className="text-center space-y-7 md:flex gap-4 lg:gap-8 items-center">
        <div className='border-8 border-yellow-500 rounded-xl md:w-1/2 shadow-[20px_20px_10px_rgba(0,0,0,0.8)]'>
            <img className='w-full h-full rounded-lg' src={imageName} alt="chatbot-image" />
        </div>
        <div className='space-y-5 lg:space-y-8 md:w-1/2'>
            <h3 className='text-2xl lg:text-3xl font-bold'>{projectName}</h3>
            <p className='lg:text-xl'>{ProjectDesc}</p>
            <p className='lg:text-xl'>Tech: <span className='font-semibold'>{techUsed}</span></p>
            <div className='space-x-3'>
                <a href={liveLink}>
                    <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Live</button>
                </a>
                <a href={githubLink}>
                    <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Code</button>
                </a>
            </div>
        </div>
    </div>
);
}

export default Project;