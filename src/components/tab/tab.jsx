import { createContext, useContext, useMemo, useState, cloneElement } from "react"
import styles from './tab.module.css'
const tabContext = createContext({})
const generateUniqueId = () => Math.random().toString(16).slice(2);
const Tab = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const tabContextValue = useMemo(() => ({ selectedTab, setSelectedTab }), [selectedTab])
  return (
    <tabContext.Provider value={tabContextValue}>
      {children}
    </tabContext.Provider>
  )
}

Tab.List = function TabList({ children }) {
  const itemsLength = children.length;
  const itemId = generateUniqueId()
  const tabListItem = children.map((child, index) => {
    return cloneElement(child, { key: index, id: index, itemsLength, itemId })
  })
  return (
    <ul className={styles["tab__list"]} aria-orientation="horizontal">
      {tabListItem}
    </ul>
  )
}

Tab.Item = function TabItem({ children, id, itemsLength, itemId }) {
  const { selectedTab, setSelectedTab } = useContext(tabContext);
  const handleItemClick = () => {
    setSelectedTab(id)
  }

  const handleKeyDown = (event) => {
    if (event?.key !== "Tab")
      return;
    event.preventDefault();
    const nextTabIndex = (id + 1) % itemsLength;
    setSelectedTab(nextTabIndex)
    const nextTabElement = document.querySelector(`[tabIndex="${`${itemId}__${nextTabIndex}`}"]`);
    if (nextTabElement) {
      nextTabElement.focus();
    }
  }

  const cssClases = selectedTab === id ? `${styles.active} ${styles["tab__list-item"]}` : styles["tab__list-item"]
  return (
    <li className={cssClases}>
      <button className="tab__list-btn" onClick={handleItemClick} onKeyDown={handleKeyDown} tabIndex={`${itemId}__${id}`}>
        {children}
      </button>
    </li>
  )
}

Tab.Panels = function TabPanels({ children }) {
  const { selectedTab } = useContext(tabContext) || {}
  return (
    <div className="tab__list-panels">
      {children[selectedTab]}
    </div>
  )
}

Tab.Panel = function TabPanel({ children }) {
  return (
    <div className="tab__list-panel">
      {children}
    </div>
  )
}

export default Tab;