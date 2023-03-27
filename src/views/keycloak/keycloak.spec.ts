import { describe, expect, it } from 'vitest';
import Keycloak from '@/views/keycloak/keycloak.vue';
import { mount } from '@vue/test-utils';

describe('Keycloak View', () => {
  it('renders properly', () => {
    const wrapper = mount(Keycloak);
    expect(wrapper.text()).toContain('Token');
  });
});
