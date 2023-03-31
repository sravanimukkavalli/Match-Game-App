import './index.css'

const EachTabItem = props => {
  const {tabDetails, isActive, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isActive ? 'active-tab' : 'tab'
  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickTab}>
        <p className={activeClassName}>{displayText}</p>
      </button>
    </li>
  )
}
export default EachTabItem
