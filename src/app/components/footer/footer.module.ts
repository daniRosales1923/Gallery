import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./footer.component";

const COMMON_IMPORTS = [
    FlexLayoutModule
];
const COMMON_DECLARATIONS = [FooterComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class FooterModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}