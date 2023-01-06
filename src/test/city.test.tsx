import {CityType} from "./02";
import exp from "constants";

let cityTest: CityType;

beforeEach(() => {
        cityTest = {
            title: "New York",
            houses: [
                {
                    builtAt: 2012, repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "Happy street"
                        }
                    }
                },
                {
                    builtAt: 2008, repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "White street"
                        }
                    }
                },

            ],
            governmentBuildings: [],
            citizenNumbers: 100000
        }
    }
)
test("test should cont 3 doms", () => {
    expect(cityTest.houses[0].builtAt).toBe(2020);
    expect(cityTest.houses[0].repaired).toBe(false);
    expect(cityTest.houses[0].address.number).toBe(101);
    expect(cityTest.houses[0].address.street.title).toBe("Happy street");

})
test("dasdasdas", () => {
    expect(cityTest.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(cityTest.governmentBuildings[0].budget).toBe(2000);
    expect(cityTest.governmentBuildings[0].staffCount).toBe(10000);
    expect(cityTest.governmentBuildings[0].address.street.title).toBe("South Str");
})



