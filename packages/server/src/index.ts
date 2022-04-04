import {server} from "./server";

server.listen(8080, () => {
    console.log(server.address());
});
