import { applicationConfig, type Preview} from '@storybook/angular'
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import * as docJson from '../documentation.json';
import 'zone.js'

setCompodocJson(docJson);

const preview: Preview = {
    parameters: {
        docs: {
            toc: true
        },
    },
    decorators: [
        applicationConfig({
            providers: [provideNoopAnimations()]
        })
    ],
    tags: ['autodocs']
}
export default preview
