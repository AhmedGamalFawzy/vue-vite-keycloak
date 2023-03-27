import { describe, expect, it, vi } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import Header from '@/components/header/header.vue';
import { KeycloakService } from '@/services/keycloak.service';

const wrapper = mount(Header, {
  global: {
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
});

vi.mock('@/services/keycloak.service');

describe('Header', () => {
  it('renders properly', async () => {
    expect(wrapper.text()).toContain('Welcome');

    const button = wrapper.find('button');
    await button.trigger('click');
    expect(KeycloakService.logout).toHaveBeenCalledOnce();
  });
});
