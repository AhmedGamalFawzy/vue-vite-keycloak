import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import Greetings from '@/views/greetings/greetings.vue';

describe('Greetings View', () => {
  it('renders properly', () => {
    const wrapper = mount(Greetings);
    expect(wrapper.text()).toContain('Welcome to Your Vue.js + TypeScript App');
  });
});
