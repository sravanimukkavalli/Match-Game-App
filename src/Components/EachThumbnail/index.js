import './index.css'

const EachThumbNail = props => {
  const {imageDetails, updateImage} = props
  const {imageUrl, thumbnailUrl} = imageDetails
  const onClickThumbnail = () => {
    updateImage(imageUrl)
  }

  return (
    <li className="each-list">
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default EachThumbNail
