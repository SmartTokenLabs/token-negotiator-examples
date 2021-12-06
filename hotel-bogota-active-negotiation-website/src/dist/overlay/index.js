import { createFabButton } from './componentFactory';
import { config } from "./../config/index";
var Overlay = (function () {
    function Overlay() {
        this.config = config['devcon-ticket-local-3002'];
        document.cookie = "fabbuttontn=" + createFabButton(this.config.fabButton) + "; max-age=31536000; SameSite=None; Secure";
    }
    return Overlay;
}());
export { Overlay };
;
//# sourceMappingURL=index.js.map