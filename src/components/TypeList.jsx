
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function TypeList(props) {
    var types = props.types
    console.log(types)
    return(
        <div className="TypeList">
            {ListTypes(types).map( (type, index) => {
                return(
                    <div className="Type">
                        <div className={`${type}`}>
                            {`${type}`}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function ListTypes(types_json){
    if(types_json == undefined){
        return [];
    }
    var rv = [];
    for (const type of types_json){
        if (type.type === undefined || type.type.name === undefined){
            continue;
        }
        rv.push(type.type.name);
    }
    return rv;
}

export default TypeList;