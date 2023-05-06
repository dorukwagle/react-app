import AlertInfo from "./components/AlertInfo";
import List from "./components/List";
import { ButtonPrimary } from "./components/Buttons";
import { useState } from "react";
import Like from "./components/Like";

function App() {
    const items = ["Profile", "Settings", "Messages", "Download", "About us"];
    const cities = ["Cairo", "Kathmandu", "nagarpur"];
    const message = <>This is simple button clicked message</>; 

    const [alertText, setAlertText] = useState(message);
    const [alertVisible, setAlertVisible] = useState(false);

    const handleSelection = (item: string) =>
        setAlertText(
            <>
                selected item: <b>{item}</b>
            </>
        );

    return (
        <div>
            <List
                heading="Application Menus"
                items={items}
                onSelect={handleSelection}
            />
            <ButtonPrimary
                color="purple"
                onClick={() => {
                    setAlertVisible(true);
                    setAlertText(message);
                }}
            >
                Touch/Click Me
            </ButtonPrimary>
            <ButtonPrimary color="green">Touch/Click Me</ButtonPrimary>
            {alertVisible && (
                <AlertInfo onHide={() => setAlertVisible(false)}>
                    {alertText}
                </AlertInfo>
            )}
            <List
                heading="Cities List"
                items={cities}
                onSelect={handleSelection}
            />
            <Like isLiked={true} onClick={() => console.log("like clicked")}></Like>
        </div>
    );
}

export default App;
