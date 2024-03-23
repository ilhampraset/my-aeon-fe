import { shallowMount, flushPromises } from '@vue/test-utils';
import UserList from '@/views/Users.vue';
import axios from 'axios';

jest.mock('axios', () => ({
    get: jest.fn()
}));

describe('UserListComponent', () => {
    let wrapper;

    beforeEach(() => {
        const userDataMock = {
            current_page: 1,
                data: [
                { id: 1, first_name: 'Myrna', last_name: 'Kshlerin', email: 'vberge@example.com' },
                { id: 2, first_name: 'Adah', last_name: 'Wiegand', email: 'umueller@example.net' },
                { id: 3, first_name: 'Elise', last_name: 'Wuckert', email: 'obeatty@example.org' },
                { id: 4, first_name: 'Katarina', last_name: 'Klein', email: 'annabelle.veum@example.net' },
                { id: 5, first_name: 'Fredrick', last_name: 'Hackett', email: 'antwon23@example.net' }
            ],
                total: 10,
                per_page: 5
        };
        axios.get.mockResolvedValue({ data: { data: userDataMock } });

        wrapper = shallowMount(UserList,{
            global: {
                mocks: {
                    $route: {
                        params: {
                            id: 1,
                        },
                    },
                },
            },
        });
    })
    afterEach(() => {
        wrapper.unmount();
    });

    it('fetches user list data and renders  it correctly', async () => {
        const userData = {
            current_page: 1,
            data: [
                { id: 1, first_name: 'Myrna', last_name: 'Kshlerin', email: 'vberge@example.com' },
                { id: 2, first_name: 'Adah', last_name: 'Wiegand', email: 'umueller@example.net' },
                { id: 3, first_name: 'Elise', last_name: 'Wuckert', email: 'obeatty@example.org' },
                { id: 4, first_name: 'Katarina', last_name: 'Klein', email: 'annabelle.veum@example.net' },
                { id: 5, first_name: 'Fredrick', last_name: 'Hackett', email: 'antwon23@example.net' }
            ],
            total: 10,
            per_page: 5
        };

        expect(axios.get).toHaveBeenCalledTimes(1);
        await flushPromises();

        expect(wrapper.vm.users).toEqual(userData);
        expect(wrapper.find('tbody').findAll('tr').length).toBe(userData.data.length);
    });

    it('displays pagination correctly', async () => {
        const metaData = {
            current_page: 1,
            total: 10,
            per_page: 5
        };

        axios.get.mockResolvedValueOnce({ data: metaData });

        expect(wrapper.vm.totalUsers).toBe(metaData.total);
        expect(wrapper.find('.pagination span').text()).toBe(`1 - ${wrapper.vm.paginationEnd} of ${wrapper.vm.totalUsers}`);
    });


});
