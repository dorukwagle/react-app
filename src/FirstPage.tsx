import AlertInfo from "./components/AlertInfo";
import List from "./components/List";
import ButtonPrimary from "./components/Buttons";
import { useState } from "react";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

function FirstPage() {
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
            <Like
                isLiked={true}
                onClick={() => console.log("like clicked")}
            ></Like>
            <ExpandableText maxChars={20}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem perspiciatis voluptatum eum consectetur
                explicabo, culpa id magnam illo ipsam. Reprehenderit, debitis
                voluptas eum voluptatibus doloremque quam architecto soluta
                officiis quos, odio, fugit quod! Vel reiciendis minima ea.
            </ExpandableText>
        </div>
    );
}

export default FirstPage;
