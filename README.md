<img src="./client/public/GIB-logo.png" alt="Group-IB logo" width="300"/>

# Test assignment (Typescript)

## Main tasks done
All of the following main tasks must be completed for the test assignment to be considered completed:

- [x] Implement 2 pages according to layout
- [x] The maximum number of messages simultaneously displayed on the page is regulated by the "notifications count" parameter
- [x] Messages can be placed at the top left (Position 1) or right (Position 2) (messages grow downwards). And at the bottom left
(Position 3) or right (Position 4) edge (messages grow upwards). The position of messages on the page is regulated by the "notifications position" parameter
- [x] The message should disappear from the screen after the timeout specified by the parameter "notifications disappear time"

## Additional tasks done
All of the following additional tasks are optional, but give additional points. Each additional task will be evaluated separately, but they must be done in the order described below, as some tasks are interdependent. The more additional tasks will be done the higher the final score.
Additional tasks:
- [x] The message can be closed by clicking X in the upper right corner of the message
- [x] If you hover over a message, its timeout is reset, and while the focus is on the message, it does not disappear. As soon as the focus goes away, the timeout countdown starts again
- [ ] If the messages do not fit on the screen, then show the maximum number of messages that can be FULLY rendered on the page, the oldest messages are truncated
- [ ] If multiple browser tabs are open, closing a message propagates to all currently open tabs (when closing a message, it disappears on all tabs)
- [ ] Changing the settings is applied immediately on all tabs (without reloading)


Application layout design is described [here](https://www.figma.com/file/N11dgM8awUororYFJ0hZCW/Frontend.Task?node-id=1%3A1335&t=IR4IdQ0I69Q0FLW0-1).

## Restrictions
- Use Typescript (no JS)
- Use dependesies listed in package.json, don't install something else
- Write code according to the eslint config
- Build via webpack with ts-loader (just use predefined configs)
