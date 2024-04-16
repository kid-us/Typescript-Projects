type Draggable = {
    drag: () => void
};

type Resize = {
    resize: () => void
};

type UIWidget = Draggable & Resize;

let textBox : UIWidget = {
    drag: () => {},
    resize: () => {}
};
