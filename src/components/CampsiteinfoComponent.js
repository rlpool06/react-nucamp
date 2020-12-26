import { Component } from "react";

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
    }

    renderCampsiteinfo(campsite) {
        if (campsite) {
            return (
                <div className="row" />
            )
        } else {
            return (
                <div />
            )
        }
    }
}

export default CampsiteInfo;