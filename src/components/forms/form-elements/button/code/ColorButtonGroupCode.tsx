import CodeDialog from "@/components/shared/CodeDialog";
import React from "react";
const ColorButtonGroupCode = () => {
  return (
    <>
      <CodeDialog>
        {`
"use client";
import * as React from 'react';
import { Button, ButtonGroup, Stack } from '@mui/material';
import { IconAlignCenter, IconAlignLeft, IconAlignRight, IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward } from '@tabler/icons-react';

<Stack spacing={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }} justifyContent="center">
    <Stack spacing={1} direction={{ xs: 'column', sm: 'column', lg: 'row' }}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="error" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          color="success"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
    </Stack>
    <Stack spacing={1} direction={{ xs: 'column', sm: 'column', lg: 'row' }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="secondary" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="warning" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="error" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="success" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={1} direction={{ xs: 'column', sm: 'column', lg: 'row' }}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup color="warning" variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup color="error" variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup color="success" variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
    </Stack>
</Stack>`}
      </CodeDialog>
    </>
  );
};

export default ColorButtonGroupCode;
