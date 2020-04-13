import React from "react";
import { CircleSlider } from "react-circle-slider";
import { Grid } from '@material-ui/core'

import './style.scss';

const ReactCircleSlider = ({ percentage, clicks, circleColor, progressColor }) => {
    return (
        <Grid className="reactCircleSlider">
            <CircleSlider value={percentage}
                size={100}
                knobRadius={0}
                progressWidth={10}
                circleWidth={10}
                tooltipSize={20}
                progressColor={progressColor}
                circleColor={circleColor}
                tooltipColor="#111026"
                showTooltip={true}
                showPercentage={true}
                disabled={true}
            />
            <div className="rcsText">
                <h4>{clicks}</h4>
                {/* <p>Clicks</p> */}
            </div>
        </Grid>
    )
}
export default ReactCircleSlider;