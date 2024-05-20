type Props = {
    risk: number
}

const PoliceRisk = (props: Props) => {
    let text, color

    switch (props.risk) {
        case 0:
            text = "None ✅"
            color = "#a3ea00"
            break;

        case 1:
            text = "Very low ✅"
            color = "#a3ea00"
            break;
        
        case 2:
            text = "Low"
            color = "green"
            break;

        case 3:
            text = "Medium"
            color = "#ffbf00"
            break;

        case 4:
            text = "High 👮"
            color = "#C62D42"
            break;

        case 5:
            text = "Very high 🚨"
            color = "red"
            break;
    }
    
    return (
        <>
          <span style={{color: "gray"}}>Police Risk: <span style={{color: color}}>{text}</span></span>
        </>
    )
};

export default PoliceRisk;
