import { CellPlugin, CellPluginComponentProps } from '@react-page/core';
import * as React from 'react';
import Component from './Component/index';
import { defaultSettings } from './default/settings';
import { ImageSettings } from './types/settings';
import { ImageState } from './types/state';

const createPlugin = (settings?: ImageSettings): CellPlugin<ImageState> => {
  const mergedSettings = { ...defaultSettings, ...settings };
  return {
    Component: (props: CellPluginComponentProps<ImageState>) => (
      <Component {...props} {...mergedSettings} />
    ),

    id: 'ory/editor/core/content/image',
    version: 1,
    IconComponent: mergedSettings.IconComponent,
    title: mergedSettings.translations.pluginName,
    isInlineable: true,
    description: mergedSettings.translations.pluginDescription,
  };
};
export default createPlugin;
