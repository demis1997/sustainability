import React, { useEffect, useState } from 'react';
import { VenomConnect } from 'venom-connect';
import { Logo } from 'src/components/logo';

type Props = {
  venomConnect: VenomConnect | undefined;
};

function venomInit({ venomConnect }: Props) {
    return (
        <div className="App">
          ...
        </div>
    );
}

export default venomInit;