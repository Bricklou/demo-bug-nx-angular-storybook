import { argsToTemplate, Meta, StoryObj } from "@storybook/angular";
import { MyLibComponent} from './my-lib.component'

type RbButtonComponentWithChildren = MyLibComponent & {children: string}

const meta: Meta<RbButtonComponentWithChildren> = {
    component: MyLibComponent,
    title: 'Demo/Button',
    args: {
        children: 'Button text'
    },
    argTypes: {
        children: { control: 'text' },
    },
}
export default meta

type Story = StoryObj<RbButtonComponentWithChildren>

export const Default: Story = {
    args: {},
    render: ({children, ...args}) => ({
        props: args,
        template: `<lib-button ${argsToTemplate(args)}>${children}</lib-button>`
    })
}
