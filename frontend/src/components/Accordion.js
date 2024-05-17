import { useState } from "react";

function Accordion ({ children }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div>
            {React.Children.map(children, (child, index) => {
                if (child.type.name === 'AccordionHeader') {
                    return React.cloneElement(child, {
                        key: index,
                        isOpen: index === selectedIndex,
                        onCLick: () => setSelectedIndex(index),
                    });
                }
                if (child.type.name === 'AccordionContent') {
                    return React.cloneElement(child, {
                        key: index,
                        isOpen: index === selectedIndex,
                    });
                }
                return null;
            })}
        </div>
    );
}

function AccordionHeader({ isOpen, onClick, children }) {
    return (
        <div onClick={onClick}>
            <h3>{children}</h3>
            {isOpen ? <i>-</i> : <i>+</i>}
        </div>
    );
}

function AccordionContent({ isOpen, children }) {
    return isOpen ? <div> {children} </div> : null;
}

function Tabs({ children }) {
    return (
        <div>
            <div>
                {React.Children.map(children, (child, index) => {
                    if(child.type.name === 'Tab') {
                        return React.cloneElement(child, {
                            key: index,
                            isActive: index === activeTab,
                            onClick: () => setActiveTab(index),
                        });
                    }
                    return null;
                })}
            </div>
            {React.Children.map(children, (child, index) => {
                if(child.type.name === 'TabContent') {
                    return React.cloneElement(child, {
                        key: index,
                        isActive: index === activeTab,
                    });
                }
                return null;
            })}
        </div>
    );
}

function Tab({ isActive, onClick, children }) {
    return (
        <div onClick={onClick}>
            <h3 style={{ color: isActive ? 'red' : 'black' }}> {children} </h3>
        </div>
    );
}

function TabContent({ isActive, children }) {
    return isActive ? <div>{children}</div> : null;
}