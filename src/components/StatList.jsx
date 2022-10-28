
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function StatList(props) {
    var stats = ListStats(props.stats)
    console.log(stats, props)
    return(
        <div className="StatList">
            <div className="Stat">
                <div className="head">
                    Stats:
                </div>
            </div>
            {stats.map( ([stat, base_stat]) => {
                return(
                    <div className="Container NoBackground JustifyBetween">
                        <div className="Column">
                            <div className="Stat">
                                {`${stat}`}
                            </div>
                        </div>
                        <div className="Column">
                            <div className="Stat">
                                <div className="value">
                                    {`${base_stat}`}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export function StatListArray(props) {
    var stats = [];
    Object.entries(props).map( ([key, value]) => stats.push([key, value]) );
    // var stats = [['weight', props.weight], ['name',  props.height]];
    return(
        <div>
            <div className="Stat">
                <div className="head">
                    Stats:
                </div>
            </div>
            {stats.map( ([stat, base_stat]) => {
                return(
                    <div className="Container NoBackground JustifyBetween">
                        <div className="Column">
                            <div className="Stat">
                                {`${stat}`}
                            </div>
                        </div>
                        <div className="Column">
                            <div className="Stat">
                                <div className="value">
                                    {`${base_stat}`}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function ListStats(stats_json){
    if(stats_json == undefined){
        return [];
    }
    var rv = [];
    for (const stat of stats_json){
        if (stat.stat === undefined || stat.stat.name === undefined || stat.base_stat === undefined){
            continue;
        }
        rv.push([stat.stat.name, stat.base_stat]);
    }
    return rv;
}

export default StatList;