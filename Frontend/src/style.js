import {createMuiTheme, responsiveFontSizes} from '@material-ui/core'

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2B3940',
            light: '#FFFFFF',
        },
        secondary: {
            main: '#00B074',
            light: '#EBF7F1'
        },
        background: {
            default: '#EBF7F1',
        }
    }
})

theme = responsiveFontSizes(theme)

export default theme