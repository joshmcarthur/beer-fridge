import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import { teal500, teal700 } from "material-ui/styles/colors";

// "Deep clone" of the object
const myTheme = JSON.parse(JSON.stringify(lightTheme));
myTheme.palette.primary1Color = teal500;
myTheme.primary2Color = teal700;
myTheme.pickerHeaderColor = teal500;

export default getMuiTheme(myTheme);
