

export default function ProfilePicture() {

    const imageUrl = './src/assets/react.svg';

    const handleClick = (e) => {
        e.target.style.display = "none";
    };

    return(
        <>
            <img height={"200px"} src={imageUrl} onClick={(e) => handleClick(e)}></img>
        </>
    );
};