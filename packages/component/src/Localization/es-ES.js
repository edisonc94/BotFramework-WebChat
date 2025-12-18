function xMinutesAgo(date) {
  const now = Date.now();
  const deltaInMs = now - new Date(date).getTime();
  const deltaInMinutes = Math.floor(deltaInMs / 60000);
  const deltaInHours = Math.floor(deltaInMs / 3600000);

  if (deltaInMinutes < 1) {
    return 'Justo ahora';
  } else if (deltaInMinutes === 1) {
    return 'Hace un minuto';
  } else if (deltaInHours < 1) {
    return `Hace ${ deltaInMinutes } minutos`;
  } else if (deltaInHours === 1) {
    return `Hace una hora`;
  } else if (deltaInHours < 5) {
    return `Hace ${ deltaInHours } horas`;
  } else if (deltaInHours <= 24) {
    return `Hoy`;
  } else if (deltaInHours <= 48) {
    return `Ayer`;
  } else {
    return new Intl.DateTimeFormat('es-ES').format(date);
  }
}

export default {
  'Adaptive Card parse error': 'Error al analizar Adaptive Card',
  'Adaptive Card render error': 'Error al renderizar Adaptive Card',
  'Chat': 'Chat',
  'Download file': 'Descargar archivo',
  'Left': 'Izquierda',
  'Listening…': 'Escuchando…',
  'Microphone off': 'Micrófono desactivado',
  'Microphone on': 'Micrófono activado',
  'New messages': 'Nuevos mensajes',
  'retry': 'reintentar',
  'Right': 'Derecha',
  'Send failed, {retry}': 'No enviado, {retry}',
  'Send': 'Enviar',
  'Sending': 'Enviando',
  'Speak': 'Hablar',
  'Starting…': 'Iniciando…',
  'Tax': 'Impuestos',
  'Total': 'Total',
  'Type your message': 'Escribe tu mensaje',
  'Upload file': 'Subir archivo',
  'VAT': 'IVA',
  'X minutes ago': xMinutesAgo
}