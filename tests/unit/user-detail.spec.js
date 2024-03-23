import { shallowMount, flushPromises } from '@vue/test-utils';
import UserDetail from '@/views/UserDetail.vue';
import axios from 'axios';

jest.mock('axios', () => ({
    get: jest.fn()
}));

describe('UserDetailsComponent', () => {
    let wrapper;

    beforeEach(() => {
        const userDataMock = {
            id : 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            profile_picture: 'https://example.com/profile.jpg',
        };
        axios.get.mockResolvedValue({ data: { data: userDataMock } });

        wrapper = shallowMount(UserDetail,{
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

    it('fetches user detail data and displays it correctly', async () => {
        const userData = {
            id : 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            profile_picture: 'https://example.com/profile.jpg',
        };

        expect(axios.get).toHaveBeenCalledTimes(1);
        await flushPromises();

        expect(wrapper.vm.userData).toEqual(userData);
        expect(wrapper.find('.card-title').text()).toContain(`${userData.first_name} ${userData.last_name}`);
        expect(wrapper.find('.card-img-left').attributes('src')).toBe(userData.profile_picture);
        expect(wrapper.findAll('.card-text').at(0).text()).toBe(userData.first_name);
        expect(wrapper.findAll('.card-text').at(1).text()).toBe(userData.last_name);
        expect(wrapper.findAll('.card-text').at(2).text()).toBe(userData.email);
    });


    it('navigates back to users page when goBack method is called', async () => {
        const mockRouter = {
            push: jest.fn(),
        };

        wrapper.vm.$router = mockRouter;

        await wrapper.vm.goBack();

        expect(mockRouter.push).toHaveBeenCalledWith('/users');
    });
});
