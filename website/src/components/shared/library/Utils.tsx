import {
  Block,
  CopySnippet,
  CubeBlockProps,
  CubeCopySnippetProps,
  CubePlaceholderProps,
  CubeTagProps,
  Flex,
  Placeholder,
  Tag,
  tasty,
} from '@cube-dev/ui-kit';

const CPColumn = tasty(Flex, {
  flow: 'column',
});

const CPRow = tasty(Flex, {
  flow: 'row',
});

function CPDivider() {
  return (
    <Block
      styles={{
        height: '100%',
        width: '1px',
      }}
      fill="var(--cp-border)"
    />
  );
}

function CPSlash() {
  return (
    <Block
      styles={{
        width: '2px',
        height: '1.5rem',
        background: 'var(--cp-border)',
        transform: 'skew(-15deg)',
      }}
    />
  );
}

function CPCopySnippet({ code, styles, ...otherProps }: CubeCopySnippetProps) {
  return (
    <CopySnippet
      code={code}
      width={['50%', '70%', '100%']}
      fill="var(--cp-surface)"
      radius="2r"
      styles={{
        color: 'var(--cp-text)',
        Code: {
          color: 'var(--cp-text)',
        },
        ...styles,
      }}
      style={{
        border: '1px solid var(--cp-border)',
      }}
      {...otherProps}
    />
  );
}

function CPPillOutline({ children }: CubeBlockProps) {
  return (
    <Block
      styles={{
        fontSize: '0.75rem',
        color: '#7F7AFF',
        padding: '0 0.5rem',
        borderRadius: '5rem',
      }}
      style={{
        border: '1px solid var(--cp-border-primary)',
      }}
    >
      {children}
    </Block>
  );
}

function CPTag(props: CubeTagProps) {
  return <Tag {...props} />;
}

function CPPlaceholder(props: CubePlaceholderProps) {
  return <Placeholder {...props} />;
}

const CPIndicator = tasty({
  as: 'div',
  border: 'none',
  styles: {
    width: 10,
    height: 10,
    borderRadius: '10px',
    display: 'inline-block',
  },
  styleProps: ['backgroundColor'],
});

export {
  CPColumn,
  CPRow,
  CPCopySnippet,
  CPSlash,
  CPTag,
  CPPillOutline,
  CPPlaceholder,
  CPDivider,
  CPIndicator,
};
