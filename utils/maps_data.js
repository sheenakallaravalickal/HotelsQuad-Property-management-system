import axios from "axios";
class mapData {
    baseUrl = "https://code.highcharts.com/mapdata/";

    getWorld = async () => {
        return await axios.get(this.baseUrl + "custom/world.geo.json");
    };
}

export default mapData;
