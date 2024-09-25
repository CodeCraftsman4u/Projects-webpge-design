import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTavItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container " onClick={onClickTavItem}>
      <button type="button" className={`tab-btn ${activeTabBtnClassName}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
