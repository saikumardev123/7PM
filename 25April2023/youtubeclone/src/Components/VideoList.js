function VideoList(props) {

    const renderList = () => {
        let x = props.videos.map(video => {
            return <li style={{ cursor: 'pointer' }} onClick={() => {

                props.onVideoClick(video)
            }} key={video.etag}><img src={video.snippet.thumbnails.default.url}></img></li>
        })
        return x;
    }

    return (
        <div>
            <h1>Video List</h1>
            <ul>
                {renderList()}
            </ul>

        </div>
    )
}
export default VideoList;