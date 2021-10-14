import { main } from "../handler";
import mock from './mock';
test(
    'Entered Correct Body. Event should return 200, with a body Object', () => {
        expect(main(mock, null, null)).toContain("statsCode: 200")
    }
)