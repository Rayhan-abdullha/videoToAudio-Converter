interface Props {
    porcessed: boolean
}
const Download = ({ porcessed }: Props) => {
    return (
        porcessed && <div className='download mt-2 sm:mt-[0]'>
            <a className='btn btn-success sm:w-[100px] w-[100%]' href="https://videotoaudio-e0kj.onrender.com/api/v1/download" download>Download</a>
        </div>
    )
}

export default Download