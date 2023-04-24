function VideoPlayer(props) {
    if (props.video) {
        let videoUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`;
        return (
            <div>

                <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
        )
    }
    else {
        <div>
            <h1>Loading......</h1>
        </div>
    }

}
export default VideoPlayer;