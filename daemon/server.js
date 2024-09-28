/* Import (local) modules. */
import sendPayouts from './src/sendPayouts.js'
import setupPayouts from './src/setupPayouts.js'

/* Validate CLI arguments. */
// TODO Split into "Base" and "Stream" payouts.
if (process.argv[2] === 'live') {
    sendPayouts()
} else {
    setupPayouts()
}
